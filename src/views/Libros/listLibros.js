import React,{useState,useEffect} from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import axios from "axios";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Input from "@material-ui/core/Input";
import Icon from "@material-ui/core/Icon";
import { isConstructorDeclaration } from "typescript";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}


const useStyles = makeStyles(styles);

export default function ListLibros() {
  const url = 'http://localhost:8000/api/libros';
  const [libros, setLibros] = useState([]);
  useEffect(() => {
    async function getLibros()  {
      await axios.get(`${url}`)
        .then((res) => {
          const listLibros = [];
          res.data.forEach(libro => {
            listLibros.push([libro.titulo,libro.autor]);
          });
          setLibros(listLibros);
        })
    }
    getLibros();
  }, [])

  // axios({
  //   method: 'post',
  //   url: 'http://localhost:8000/api/libros',
  //   data: {
  //     titulo: 'Fred',
  //     autor: 'Flintstone'
  //   }
  // });
  
  function guardarLibros() {
    console.log("Hiciste Click");
  }

  const [] = useState({

    
  }) 

  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={6} sm={6} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Libros</h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>
            
            <Icon style={{cursor:'pointer'}} size="sm" color="action"  >library_add </Icon>
            <Table
                tableHeaderColor="primary"
                tableHead={["Titulo", "Autor"]}
                tableData={libros}  
            />
          </CardBody>
        </Card>
      </GridItem>
      
        
        <GridItem xs={6} sm={6} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Libro</h4>
              <p className={classes.cardCategoryWhite}></p>
            </CardHeader>
            <CardBody>
              <GridContainer > 
                    <GridItem xs={6} sm={6} md={6}>
                      <CustomInput
                        labelText="Nombre"
                        id="company-disabled"

                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                        }}
                      />
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                      <CustomInput
                        labelText="Autor"
                        id="autor"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
              </GridContainer>
              <Button color="success" onClick={guardarLibros()} >Guardar</Button>
            </CardBody>
          </Card>
      </GridItem>      
    </GridContainer>
  );
}
