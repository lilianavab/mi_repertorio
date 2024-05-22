
export const vistaHome = (req,res) => {
    res.render("home",{
        layout:"main",
        title: "Mi Repertorio",
        titleLista:"Tabla de canciones",
    
    })
}

