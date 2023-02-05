const express=require("express");
const OPENAI_API_KEY="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";
const cors=require(cors());

const{ Configuration, OpenAIApi }=require("openai");
const configuration = new Configuration({
    apiKey:OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);






const app=express();
app.use(cors());
//work as a middleware
app.use(express.json());

app.get("/ping",(req,res)=>{
res.json({
message:"pong",


});
})


app.post("/chat",(req,res)=>{
    const question=req.body.question;

    openai.createCompletion({
        model: "text-davinci-003",
        prompt:"what is api",
        max_tokens: 7,
        temperature: 0,
      }).then(response=>{
        // console.log(response.data);
    return response?.data?.choices?.[0]?.text;
    
      }).then((answer="")=>{
     const array=answer?.split("/n").filter((value)=>value).map((value)=>value.trim());
     return array;
      })
      .then((answer)=>{

        console.log(question);
        res.json({
         answer:answer,
        propt:question,
        
        })
        
      })

 

})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");

})