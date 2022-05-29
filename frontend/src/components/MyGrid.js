import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import RefreshIcon from "@mui/icons-material/Refresh";
import {addActor,deleteActor,getData, updateActor} from '../services/data';
import AddActor from './AddActor';
import EditActor from './EditActor';
import AddDetails from './AddDetails';
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./newStyles.css";
function MyGrid(){
  const [data,setData] = useState([]);
  const [actor,setActor] = useState({sl_no:'',business_code:'',cust_number: '',clear_date: '',buisness_year: '',doc_id: '',posting_date: '',document_create_date: '',document_create_date1: '',due_in_date: '',invoice_currency: '',document_type: '',posting_id: '',area_business: '',total_open_amount: '',baseline_create_date: '',cust_payment_terms: '',invoice_id: '',isOpen: '',aging_bucket: '',is_deleted: ''});

  const[open,setOpen] = useState(false);
  const[opens,setOpens] = useState(false);
  const {sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,document_create_date1,due_in_date,invoice_currency,document_type,posting_id,area_business,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id,isOpen,aging_bucket,is_deleted } = actor;
  const [columns, setColumns] = useState([{field:"sl_no",label:"SL NO"},{field:"business_code",label:"BUSINESS CODE"},{field:"cust_number",label:"CUST TERMS"},{field:"clear_date",label:"CLEAR DATE"},{field:"buisness_year",label:"BUSINESS YEAR"},{field:"doc_id",label:"DOC ID"},{field:"posting_date",label:"POSTING DATE"},{field:"document_create_date",label:"DOCUMENT CREATE DATE"},{field:"document_create_date1",label:"DOCUMENT CREATE DATE1"},{field:"due_in_date",label:"DUE IN DATE"},{field:"invoice_currency",label:"INVOICE CURRENCY"},{field:"document_type",label:"DOCUMENT TYPE"},{field:"posting_id",label:"POSTING ID"},{field:"area_business",label:"AREA BUSINESS"},{field:"total_open_amount",label:"TOTAL OPEN AMOUNT"},{field:"baseline_create_date",label:"BASELINE CREATE DATE"},{field:"cust_payment_terms",label:"CUST PAYMENT TERMS"},{field:"invoice_id",label:"INVOICE ID"},{field:"isOpen",label:"IS OPEN"},{field:"aging_bucket",label:"AGING BUCKET"},{field:"is_deleted",label:"IS DELETED"}]);
  
  const changeHandler = (e) => {
    const{name,value} = e.target;
    setActor({...actor,[name]: value});
  }
  const submitHandler = (e) => {
    e.preventDefault();
    let response = addActor(actor);
    if(response){
      setActor({business_code:'',cust_number: '',clear_date: '',buisness_year: '',doc_id: '',posting_date: '',document_create_date: '',due_in_date: '',invoice_currency: '',document_type: '',posting_id: '',total_open_amount: '',baseline_create_date: '',cust_payment_terms: '',invoice_id: ''})
    }
  } 
   const editHandler = () => {
    setOpen(true);
  }

  const deleteHandler = async() =>{
    let response = await deleteActor(actor.sl_no);
 
  }

  const checkHandler = (e,sl_no) =>{
    if(e.target.checked){
      let editActor = data.filter(actor => actor.sl_no === sl_no)[0];
      setActor(editActor);
  }
  }
  const handleClose = async (update) => {
    if(update){
      let response = await updateActor(actor);
    }
    setOpen(false);
  };
  
  const addHandler = async() => {
    setOpens(true);
  }

  const handleCloses = async() =>{
    setOpens(false);
  }
  

  useEffect(() => {
    async function fetchData() {
      setData(await(getData()))
    }
    fetchData();
  }, []);

  return <>
  <div className= "invoice-list">
  <EditActor  sl_no={sl_no} business_code={business_code} cust_number={cust_number} clear_date={clear_date} buisness_year={buisness_year} doc_id={doc_id} posting_date={posting_date} area_business={area_business} document_create_date={document_create_date} document_create_date1={document_create_date1} due_in_date={due_in_date} invoice_currency={invoice_currency} document_type={document_type} posting_id={posting_id} total_open_amount={total_open_amount} baseline_create_date={baseline_create_date} cust_payment_terms={cust_payment_terms} invoice_id={invoice_id} isOpen={isOpen} aging_bucket={aging_bucket} is_deleted={is_deleted} open={open} handleClose={handleClose} changeHandler={changeHandler} />
  <AddActor business_code={business_code} cust_number={cust_number} clear_date={clear_date} buisness_year={buisness_year} doc_id={doc_id} posting_date={posting_date} document_create_date={document_create_date} due_in_date={due_in_date} invoice_currency={invoice_currency} document_type={document_type} posting_id={posting_id} total_open_amount={total_open_amount} baseline_create_date={baseline_create_date} cust_payment_terms={cust_payment_terms} invoice_id={invoice_id} changeHandler={changeHandler} submitHandler={submitHandler}/>
  <AddDetails business_code={business_code} cust_number={cust_number} clear_date={clear_date} buisness_year={buisness_year} doc_id={doc_id} posting_date={posting_date} document_create_date={document_create_date} due_in_date={due_in_date} invoice_currency={invoice_currency} document_type={document_type} posting_id={posting_id} total_open_amount={total_open_amount} baseline_create_date={baseline_create_date} cust_payment_terms={cust_payment_terms} invoice_id={invoice_id} changeHandler={changeHandler} submitHandler={submitHandler} opens={opens} handleCloses={handleCloses}/>
  
  
  <Button sx = {
            { paddingRight: 10 } }
        variant = "contained" >
        PREDICT </Button> 
  <Button sx = {
            { paddingRight: 10 } }
        variant = "outlined" >
        ANALYTICS VIEW </Button>

  <Button sx = {
            { paddingRight: 10 } }
        variant = "outlined" >
        ADVANCED SEARCH </Button>

  <Button variant = "outlined" >
        <RefreshIcon / >
        </Button>
  
  
  <Button variant = "outlined" onClick={addHandler}
        startIcon = { < AddIcon / > } >
        Add </Button> 
  <Button variant = "outlined" onClick={editHandler}
        startIcon = { < EditIcon / > } >
        Edit </Button> 
  <Button variant = "outlined" onClick={deleteHandler}
        startIcon = { < DeleteIcon / > } >
        Delete </Button>
   

  {/* <Button variant="outlined" onClick={addHandler}>AddInVoice</Button>
  <Button variant="contained" onClick={editHandler}> Edit </Button>
  <Button variant="outlined" onClick={deleteHandler}>Delete</Button>
   */}
  <br/>
  <TableContainer component={Paper} className="header">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="header">
          <TableRow>
            <TableCell>Select</TableCell>
            <TableCell>SL NO</TableCell>
            <TableCell>BUSINESS CODE</TableCell>
            <TableCell>CUST NUMBER</TableCell>
            <TableCell>CLEAR DATE</TableCell>
            <TableCell>BUSINESS YEAR</TableCell>
            <TableCell>DOC ID</TableCell>
            <TableCell>POSTING DATE</TableCell>
            <TableCell>DOCUMENT CREATE DATE</TableCell>
            <TableCell>DOCUMENT CREATE DATE1</TableCell>
            <TableCell>DUE IN DATE</TableCell>
            <TableCell>INVOICE CURRENCY</TableCell>
            <TableCell>DOCUMENT TYPE</TableCell>
            <TableCell>POSTING ID</TableCell>
            <TableCell>AREA BUSINESS</TableCell>
            <TableCell>TOTAL OPEN AMOUNT</TableCell>
            <TableCell>BASELINE CREATE DATE</TableCell>
            <TableCell>CUST PAYMENT TERMS</TableCell>
            <TableCell>INVOICE ID</TableCell>
            <TableCell>IS OPEN</TableCell>
            <TableCell>AGING BUCKET</TableCell>
            <TableCell>IS DELETED</TableCell>
        </TableRow>
        </TableHead>
        <TableBody className="header">
          {data.map(actor=> (
            <TableRow
              key={actor.sl_no}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="actor">
                 <Checkbox onClick={(e) => checkHandler(e,actor.sl_no)}/>
              </TableCell>
              <TableCell component="th" scope="actor">
                {actor.sl_no}
              </TableCell>
              <TableCell align="">{actor.business_code}</TableCell>
              <TableCell align="">{actor.cust_number}</TableCell>
              <TableCell align="">{actor.clear_date}</TableCell>
              <TableCell align="">{actor.buisness_year}</TableCell>
              <TableCell align="">{actor.doc_id}</TableCell>
              <TableCell align="">{actor.posting_date}</TableCell>
              <TableCell align="">{actor.document_create_date}</TableCell>
              <TableCell align="">{actor.document_create_date1}</TableCell>
              <TableCell align="">{actor.due_in_date}</TableCell>
              <TableCell align="">{actor.invoice_currency}</TableCell>
              <TableCell align="">{actor.document_type}</TableCell>
              <TableCell align="">{actor.posting_id}</TableCell>
              <TableCell align="">{actor.area_business}</TableCell>
              <TableCell align="">{actor.total_open_amount}</TableCell>
              <TableCell align="">{actor.baseline_create_date}</TableCell>
              <TableCell align="">{actor.cust_payment_terms}</TableCell>
              <TableCell align="">{actor.invoice_id}</TableCell>
              <TableCell align="">{actor.isOpen}</TableCell>
              <TableCell align="">{actor.aging_bucket}</TableCell>
              <TableCell align="">{actor.is_deleted}</TableCell>


              

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  
  </>
  
 
}
export default MyGrid;