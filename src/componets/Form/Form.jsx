import {useState} from "react";
import{
    Box,
    TextField,
    Button,
    Typography,

} from "@mui/material";


export const AddProducto = ({onAddProducto}) => {
    const [nombre, setNombre]= useState("");
    const [precio, setPrecio]= useState("");
    const [categoria, setCategoria]= useState("");

    const handleAddProducto = (e)=>{
        e.preventDefault();
        if(nombre && precio && categoria){
            const nuevoProducto = {
                nombre,
                precio: Number(precio),
                categoria,
            };
            onAddProducto(nuevoProducto);
            setNombre("");
            setPrecio("");
            setCategoria("");
        }
    };
    return(
        <Box
        component="form"
        onSubmit={handleAddProducto}
        sx={{
          display:"flex",
          flexDirection:"column",
          gap:2,
          maxWidth:"400px",
          margin:"20px auto",
          padding:2,
          border:"1px solid #ddd",
          borderRadius:"8px",
          boxShadow:"0 2px 5px rgba(0,0,0,0.1)",
        }}>
            <Typography variant="h6" textAlign="center">
                Agregar producto
            </Typography>
            <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
            required
            />
            <TextField
            label="Precio"
            variant="outlined"
            fullWidth
            type="number"
            value={precio}
            onChange={(e)=>setPrecio(e.target.value)}
            required
            />
            <TextField
            label="Categoria"
            variant="outlined"
            fullWidth
            value={categoria}
            onChange={(e)=>setCategoria(e.target.value)}
            required
            />

            <Button type="submit" variant="contained" color= "success"  fullWidth  >
            Enviar
            </Button>
        </Box>
    );
};
