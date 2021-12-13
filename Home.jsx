import { useState } from "react";
//import { Modal,ModalBody,ModalHeader} from "reactstrap";
import AddItem from "./comp";

const store1=[{
  id:1,
  author:"faulkner",
  subject:"as i lay dying"        
},
{
id:2,
author:"howard",
subject:"Alien corn"
},
{
id:3,
author:"henry",
subject:"skills" 
}
];
const Home=()=>{
    
     const [data,setData]=useState(store1);
   const [buttonClick, setButtonClick] = useState(false);


    //const [newData,setnewData]=useState([]);

{/*const onChangeHandler=(e)=>{
  console.log(e.target);
    setnewData(e.target.value);
}
const onChangeSubmit=(e)=>{
     setData([...data,newData]);
     setnewData('');
}
*/}                                                                    
       
   const deleteItem=(id)=>{                                        
     const filterData=data.filter((each)=>(each.id !== id));
    setData(filterData);

   }

   {/*const updateData=(e)=>{
     const newData=[...data];
      newData[e.target.id]=e.target.value;
     setData(newData);
   }
  */}

    return (
       
      <>
        <button onClick={() => setButtonClick(true)}>Open</button>
        {buttonClick && <AddItem data={data} setData={setData} setButtonClick={setButtonClick}/>}
      
 

        {data.map((each)=>(
          <div key={each.id}>
           <h4>{each.id}</h4>
           <h4>{each.author}</h4>
           <h4>{each.subject}</h4>
        
         <button type="button" onClick={()=>deleteItem(each.id)}>deleteitem</button>
         {/*<button type="button" onClick={updateData} >edit</button>*/}
        </div>
        

        ))}
      </>  
           )
              }

export default Home;