import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const AddItem = (props) => {

 
  const {data,setData,setButtonClick}=props;
  const [newData,setnewData]=useState({});


  const input=(e)=>{
      const {name,value}=e.target;
       setnewData({...newData,[name]:value});
  }

  const SubmitData = (e) => {
      
      e.preventDefault();
     setData([...data, newData]);
     
     console.log(newData);
     setButtonClick(false);
  }

 
 {/* const onChangeSubmit=(e)=>{
   setData([...data,newData]);
   setnewData('');
}
*/}

   const subOn=()=>{
    setButtonClick(false);
   }

   

return(

    <div >
            <Modal isOpen>

            <ModalHeader toggle={subOn}>Book</ModalHeader>

            <ModalBody>

                <form onSubmit={SubmitData} >
                    <label>Book id:   </label>
                    <input type="number" value={newData.id} name="id" placeholder="id" onChange={input}/> <br></br>
                    <label>Book Author:   </label>
                    <input  type="text" value={newData.author} name="author" placeholder="author" onChange={input}/><br></br>
                    <label>Book subject:  </label>
                    <input type="text" value={newData.subject} name="subject" placeholder="subject" onChange={input}/>  
                    <button type="submit">add book</button>
                    
                </form>
                
            </ModalBody>
            
        </Modal>
        

             
    </div>
    )
}
export default AddItem;