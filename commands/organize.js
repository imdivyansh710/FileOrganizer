const fs = require("fs"); //fs module
const path = require("path"); //path module
let types = {
    media: ["mp4", "mkv", "mp3","mov"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex',"csv",'json'],
    app: ['exe', 'dmg', 'pkg', "deb","apk"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath){
    if(srcPath== undefined){
        //The process.cwd() method returns the current working directory of the Node.js process.
        srcPath =   process.cwd();
        console.log("source path is ",srcPath);
    }

    let organizedFiles = path.join(srcPath,"organized_files");
    console.log("organized files folder path is ", organizedFiles);
    if(fs.existsSync(organizedFiles)==false){
        console.log("inside if");
        console.log();
        fs.mkdirSync(organizedFiles);
    }
    else{
        console.log("folder already exist !");
    }

    let allFiles = fs.readdirSync(srcPath); // Reads the content of the directory -- basically reads the name of the files present in the directory
    console.log(srcPath);
    console.log(allFiles);

    for(let i=0;i<allFiles.length;i++){
        let ext = path.extname(allFiles[i]);  //return the extension of the file
        console.log(ext);
    }
}
 let srcPath = "E:\\FileOrganizer\\commands\\downloads";
organize(srcPath);