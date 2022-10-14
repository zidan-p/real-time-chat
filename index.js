const express = require('express');
const path = require('path');
const app = express();

//--- untuk static file, supaya dapat menggunkana node modules
app.use("/static", 
    express.static(
        path.resolve(__dirname, "frontend", "static")
    )
);


//--- config library, suapay mendapatkan semua librarynya
// app.use('/popper', express.static(__dirname, "/node_modules/@popperjs/core/index"))
// const viewModule = require('./frontend/module/require');
// app.use('/module', viewModule);

app.use('/module/popper', 
    express.static(__dirname + '/node_modules/@popperjs/core/dist/umd/popper')
)



//--- untuk halaman utamanya
//akan kita kirimkan file berupa halan index
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});



const port = 8000; // you can use any port
app.listen(port);
console.log(`server on => http://localhost:${port}/`);

