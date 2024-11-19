import  { useState } from "react";
import { mockData } from "../../../utils/mockData";
import { AddProducto } from "../Form/Form"
import { useEffect } from "react";
import{
    Box,
    CircularProgress,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    Toolbar,
    Table,
    TableRow,
    } from "@mui/material";


export const ProductosTable = () => {
    const [productos, setProductos]= useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            if (mockData.length > 0){
                setProductos(mockData);
        }
        setLoading(false);
    },1000);
    return()=>clearTimeout(timeout);
    },[]);

    const handleAddProducto=(newProduct) =>{
        setProductos((preveProduct)=>[...preveProduct, newProduct]);
    };

    if (loading) {
        return <CircularProgress/>;
    }

    return(
        <Box component="main" sx={{flexGrow: 1,p:3}}>
            <Toolbar/>
            <div
            style={{
                marginLeft:"180px",
                width:"100%",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
            }}
            >
                <AddProducto onAddProducto={handleAddProducto}/>

            <div style={{display:"flex", flexDirection:"column"}}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Precio</TableCell>
                                <TableCell>Categoria</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productos.map((producto)=>(
                                <TableRow key={producto.id}>
                                    <TableCell>{producto.nombre}</TableCell>
                                    <TableCell>{producto.precio}</TableCell>
                                    <TableCell>{producto.categoria}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            </div>
        </Box>
    );
};