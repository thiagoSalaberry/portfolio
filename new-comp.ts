import { radialGradient } from "framer-motion/client";
import fsPromises from "fs/promises";
import path from "path";

type Query = {
    route: string;
    componentFolder: string;
}
const parseARGV = (argv:string[]):Query => {
    let request:Query = {
        route: "",
        componentFolder: ""
    };
    const route:string = argv[argv.findIndex(item => item.startsWith("--route")) + 1];
    const componentFolder:string = argv[argv.findIndex(item => item.startsWith("--componentName")) + 1];
    if(!argv.includes("--route") || !argv.includes("--componentName") || !route || !componentFolder) throw console.error((
        "Debes ingresar una ruta con el formato '--route <nombre-de-la-ruta> y el nombre del componente con el formato '--componentName <nombre-del-componente>'."
    ));
    request.route = route;
    request.componentFolder = componentFolder;
    return request;
}

const createNewComponent = async(route:string, componentFolder:string):Promise<void> => {
    const routeExists:boolean = await baseRouteExists(route);
    if(!routeExists) return;
    const componentName:string = componentFolder.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
    await createFolder(route, componentFolder, componentName);
    await updateFile(route, componentFolder, componentName);
}

const baseRouteExists = async (route:string):Promise<boolean> => {
    const baseRoute:string = path.join(__dirname, `/${route}`);
    try {
        await fsPromises.access(baseRoute);
        return true
    } catch (error) {
        console.error("La ruta en la que quiere crear el componente no existe.")
        return false;
    }
};

const createFolder = async (route:string, componentFolder:string, componentTitle:string):Promise<void> => {
    const folder:string = path.join(route, componentFolder);
    try {
        const routeAlreadyExists:any = await fsPromises.access(route);
        if(routeAlreadyExists) throw new Error("La carpeta que quieres crear ya existe.")
        await fsPromises.mkdir(folder);
        await fsPromises.access(folder);
        const indexFile:string = path.join(folder, "index.tsx");
        const indexContent:string = `import styles from "./styles.module.css";
import { ${componentTitle}Props } from "@lib/types";

export function ${componentTitle}(props:${componentTitle}Props) {
    return (
        <div className={styles.container}>
            ${componentTitle} Component
        </div>
    );
};
        `.trim();
        const cssFile:string = path.join(folder, "styles.module.css");
        const cssContent:string = ".container {}";
        await fsPromises.writeFile(indexFile, indexContent);
        await fsPromises.writeFile(cssFile, cssContent);
    } catch (error) {
        console.error("Hubo un error al crear la carpeta", error);
    }
};

const updateFile = async(route:string, componentFolder:string, componentName:string):Promise<void> => {
    const indexFile:string = path.join(__dirname, `/${route}`, "index.tsx");
    const fileContent = await fsPromises.readFile(indexFile);

    if(fileContent.toString() == "export {};") {
        try {
            return await fsPromises.writeFile(indexFile, `
    import { ${componentName} } from "./${componentFolder}";

export { ${componentName} };
                `.trim());
        } catch (error) {
            console.error(error)
        }
    };

    let [importsLine, exportLine] = fileContent.toString().trim().replaceAll("\r\n", "").split("export");
    const imports:string[] = importsLine.split(";");
    imports.pop();
    imports.push(`import { ${componentName} } from "./${componentFolder}"`);
    imports.sort((a, b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });

    exportLine.trim();
    const startIndex:number = exportLine.indexOf("{") + 1;
    const endIndex:number = exportLine.indexOf("};");
    exportLine = exportLine.slice(startIndex, endIndex).trim().replaceAll(" ", "");
    const exports:string[] = exportLine.split(",");
    exports.push(componentName);
    exports.sort((a, b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });

    const indexContent:string = `
        ${imports.join(";\r\n")};

export { ${exports.join(", ")} };
    `.trim();
    await fsPromises.writeFile(indexFile, indexContent);
    console.log(`✅ El componente ${componentName} se creó exitosamente en la ruta 📂'${route}' con los archivos 📄'index.tsx' y 📄'styles.module.css'.`);
    return;
};

(async ():Promise<void> => {
    const { route, componentFolder } = parseARGV(process.argv.slice(2));
    await createNewComponent(route, componentFolder)
})();