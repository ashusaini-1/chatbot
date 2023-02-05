// import express, { response } from "express";
// const OPENAI_API_KEY="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";
// const cors=require("cors");

// const{ Configuration, OpenAIApi }=require ("openai");
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);







// // openai.listEngines().then((response)=>{
// // console.log(response);

// // });


// const  app=express();
// //used to communicate client with server because both are running on different server
// app.use(cors());
// app.use(express.json());

// app.get("/ping",(req,res)=>{
// res.json({
// message:"pong",


// });

// })


// app.post("/chat",(req,res)=>{
//     const question=req.body.question;
    
    
    

// openai.createCompletion({
//     model: "text-davinci-003",
//     prompt:question,
//     max_tokens: 7,
//     temperature: 0,
//   }).then(response=>{
// return response?.data?.choices?.[0]?.text;

//   }).then(answer=>{
// const array=answer?.split("/n").filter((value)=>value).map((value)=>value.trim());
// return array;
//   })
  
// .then((answer)=>{
// res.json((
// answer:answer,
// propt:question,

// ));


// })
    
    
    
    
//     console.log({question});
//     // res.json({
//     // answer:"Pong",
//     // question,
    
    
//     // });
    
//     })



// app.listen(3000,()=>{
// console.log("Server is running on port 30000");

// })








// to read text
//   const inputRef=useRef(); 

// const {qna,setQna}=useState([

// // {from:YOU,value:"FROM ME"},
// // {from:AI,value:["1 message from AI","2 message from AI"]}

// ]);
// const {Loading,setLoading}=useState([]);

// const updateQna=(from,value)=>{
//   // setQna({...qna,{from,value}});
//   setQna((qna)=>[...qna,{from,value}]);
// }

//   const handleSend=()=>{
// const question=inputRef.current.vlaue;
// // setQna({...qna,{from:YOU,value:question}});
// // console.log(question);
// updateQna(YOU,question);
// setLoading(true);

// //send question to backend
// axios.post('http://localhost:3000/chat',{
 
// question,
// }).then((response)=>{
//   // setQna({...qna,{from:AI,response.data.answer}});
//   // console.log(response.data.answer);

//   updateQna(AI,response.data.answer);
// }).finally(()=>{
//   setLoading(false);
// })

//   }

// const renderContent=(qna)=>{
//   const value=qna.value;
//   if(Array.isArray(value)){

//     return value.map((v)=>
//     <p className="message-text">{v}</p>)
//   }
//   return <p className="message-text">{value}</p>
// }

  
//   return 
  

//     <main class="container">
//     <div class="chats">


//     {
// qna.map(qna=>{
// if(qna.from===YOU){
//   return(
//     <div class="send chat">
//     <img
//     src="https://cdn-icons-png.flaticon.com/512/2202/220"
//     alt=""
    
//     class="avtar"/>
//      <p>{renderContent{qna}}</p>
//     {/* <p class=""> Hi Bot-</p> */}
    
//   ) ;
// }

// return(
//   <div class="recieve chat">
//     <img
//     src="https://cdn-icons-png.flaticon.com/512/4712/471"
    
//     alt=""
    
//     class="avtar"/>
//    <p>{renderContent{qna}}</p>

//     {/* <p class=""> Hello Human</p> */}
    
//     </div>
    

// )

// })

//     }
    
   

//    {!Loading && (

//     <div class="recieve chat">
//     <img
//     src="https://cdn-icons-png.flaticon.com/512/4712/471202"
    
//     alt=""
    
//     class="avtar"/>
 

//      <p> Typing...</p>
    
//     </div>

//    )}
   
//     </div>
    
    // <div class="chat-input">
    // <input 
    // type="text"
    // ref={inputRef}
    // class="form-control col" placeholder="Type Something"/>
    
    // <button disabled={Loading} class="btn btn-success" onClick={}=>{handleSend}>Send</button> </div>
    
//     </main>
    
//     </main>