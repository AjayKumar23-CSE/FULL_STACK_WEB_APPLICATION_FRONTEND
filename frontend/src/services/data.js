import axios from "axios";
export const getData = async () => {
  let response = await axios.get("http://localhost:8080/hrc-final-web-app-preject/TableLoading");
  let data = response.data.actors;
  data.map((actor,index)=>({...actor,"id":index}))
  return data;
  }
  export const addActor = async ({business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id}) => {
    let data =  "business_code=" + business_code + "&cust_number=" + cust_number + "&clear_date="  + clear_date + "&buisness_year=" + buisness_year + "&doc_id=" + doc_id + "&posting_date=" + posting_date + "&document_create_date=" + document_create_date + "&due_in_date=" + due_in_date + "&invoice_currency=" + invoice_currency + "&document_type=" + document_type + "&posting_id=" + posting_id + "&total_open_amount=" + total_open_amount  + "&baseline_create_date=" + baseline_create_date + "&cust_payment_terms=" + cust_payment_terms + "&invoice_id=" + invoice_id;
    let response = await axios.get("http://localhost:8080/hrc-final-web-app-preject/addActor?" + data);
    return response.data;
  }
  export const updateActor = async ({sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,document_create_date1,due_in_date,invoice_currency,document_type,posting_id,area_business,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id,isOpen,aging_bucket,is_deleted }) => {
    let data =  "sl_no="+ sl_no + "&business_code=" + business_code + "&cust_number=" + cust_number + "&clear_date="  + clear_date + "&buisness_year=" + buisness_year + "&doc_id=" + doc_id + "&posting_date=" + posting_date + "&document_create_date=" + document_create_date + "&document_create_date1=" + document_create_date1 + "&due_in_date=" + due_in_date + "&invoice_currency=" + invoice_currency + "&document_type=" + document_type + "&posting_id=" + posting_id + "&area_business=" + area_business +"&total_open_amount=" + total_open_amount  + "&baseline_create_date=" + baseline_create_date + "&cust_payment_terms=" + cust_payment_terms + "&invoice_id=" + invoice_id + "&isOpen=" + isOpen +  "&aging_bucket=" +  aging_bucket + "&is_deleted=" + is_deleted ;
    let response = await axios.get("http://localhost:8080/hrc-final-web-app-preject/update?" + data);
    return response.data;
  }
  export const deleteActor = async (sl_no) => {
    let data =  "sl_no="+ sl_no;
    let response = await axios.get("http://localhost:8080/hrc-final-web-app-preject/Delete?" + data);
    return response.data;
  }
