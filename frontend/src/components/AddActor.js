import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AddActor({business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id,changeHandler,submitHandler}){
  return <>
    <DialogTitle>Add</DialogTitle>
    <DialogContent>

    <form>
      <label>Business Code</label>
      <input name="business_code" value={business_code} onChange={changeHandler}/>
      <label>Cust Number</label>
      <input name="cust_number" value={cust_number} onChange={changeHandler}/>
      <label>Clear Date</label>
      <input name="clear_date" value={clear_date} onChange={changeHandler}/>
      <label>Business Year</label>
      <input name="buisness_year" value={buisness_year} onChange={changeHandler}/>
      <label>Document ID</label>
      <input name="doc_id" value={doc_id} onChange={changeHandler}/>
      <label>Posting Date</label>
      <input name="posting_date" value={posting_date} onChange={changeHandler}/>
      <label>Document Create Date</label>
      <input name="document_create_date" value={document_create_date} onChange={changeHandler}/>
      <label>Due In Date</label>
      <input name="due_in_date" value={due_in_date} onChange={changeHandler}/>
      <label>Invoice Currency</label>
      <input name="invoice_currency" value={invoice_currency} onChange={changeHandler}/>
      <label>Document Type</label>
      <input name="document_type" value={document_type} onChange={changeHandler}/>
      <label>Posting Id</label>
      <input name="posting_id" value={posting_id} onChange={changeHandler}/>
      <label>Total Open Amount</label>
      <input name="total_open_amount" value={total_open_amount} onChange={changeHandler}/>
      <label>Baseline Create Date</label>
      <input name="baseline_create_date" value={baseline_create_date} onChange={changeHandler}/>
      <label>Customer Payment Terms</label>
      <input name="cust_payment_terms" value={cust_payment_terms} onChange={changeHandler}/>
      <label>Invoice Id</label>
      <input name="invoice_id" value={invoice_id} onChange={changeHandler}/>
      <input type={"submit"} value={"Submit"} onClick={submitHandler}/>

    </form>
    </DialogContent>
  </>
}
export default AddActor;