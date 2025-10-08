import React, { useRef, useState } from 'react'
import { useContext } from 'react'
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import aiImg from "../assets/ai.gif"
import userImg from "../assets/user.gif"
import { TfiMenuAlt } from "react-icons/tfi";
import { GiSplitCross } from "react-icons/gi";

function Home() {
  const {userData,serverUrl,setUserData,getGeminiResponse}=useContext(userDataContext)
  const navigate = useNavigate()

  const [listening, setListening] = useState(false)
  const [userText,setUserText] = useState("")
  const [aiText,setAiText] = useState("")
  const isSpeakingRef =  useRef(false)
   const [ham, setHam] = useState(false)
  const recognitionRef = useRef(null)
  const isRecognizingRef = useRef(false)

  const synth =window.speechSynthesis

  const handleLogOut=async ()=>{
     try {
      const result = await axios.get(`${serverUrl}/api/auth/logout`,{withCredentials:true})
      setUserData(null)
      navigate("/signup")
     } catch (error) {
      console.log(error)
     }
  }
      
     const startRecognition =()=>{
        try {
              recognitionRef.current?.start();
              console.log("Recognition requested error")
        } catch (error) {
              if(error.name !=="InvalidStateError"){
                  console.error("start error:",error);
              }
        }
     };

  const speak=(text)=>{
    const utterance = new  SpeechSynthesisUtterance(text)
       
     utterance.lang = 'hi-IN';
     const voices =  window.speechSynthesis.getVoices()
     const hindiVoice = voices.find(v =>v.lang=== 'hi-IN');
     if(hindiVoice){
       utterance.voice=hindiVoice;
     }



     isSpeakingRef.current=true
     utterance.onend=()=>{
      setAiText("")
        isSpeakingRef.current=false
         setTimeout(()=>{
          startRecognition(); //delay se race condition avoid hoti hai
         },800)
       
     }
       synth.cancel();  // if there is already has an speech it will remove it
    synth.speak(utterance)
  }

  const handleCommand=(data)=>{
     const {type,userInput,response} =data
     speak(response);

    // Google Search
  if (type === "google_search") {
    const query = encodeURIComponent(userInput);
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
  }

  // YouTube Search
  if (type === "youtube_search") {
    const query = encodeURIComponent(userInput);
    window.open(`https://www.youtube.com/results?search_query=${query}`, "_blank");
  }

  // YouTube Play
  if (type === "youtube_play") {
    const query = encodeURIComponent(userInput);
    window.open(`https://www.youtube.com/results?search_query=${query}`, "_blank");
  }
  



  // Open Website
  if (type === "open_website") {
    let site = userInput.toLowerCase().replace(/open\s*/g, "").trim();
    if (!site.includes(".")) site += ".com";
    if (!site.startsWith("http")) site = "https://" + site;
    window.open(site, "_blank");
  }

  // Instagram
  if (type === "instagram_open") {
    window.open("https://www.instagram.com/", "_blank");
  }

  // Facebook
  if (type === "facebook_open") {
    window.open("https://www.facebook.com/", "_blank");
  }

  // LinkedIn
  if (type === "linkedin_open") {
    window.open("https://www.linkedin.com/", "_blank");
  }

  // Play Music
  if (type === "play_music") {
    window.open("https://www.youtube.com/results?search_query=lofi+music", "_blank");
  }
  if (type === "calculator_open") {
    window.open("https://www.online-calculator.com/full-screen-calculator/", "_blank");
}

  // Get Date
  if (type === "get_date") {

  }

  // Get Day
  if (type === "get_day") {
   
  }

  // Get Time
  if (type === "get_time") {
  const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  speak(`The current time is ${now}`);
}

  // Get Month
  if (type === "get_month") { }

 

  

  // Get Weather (example: open Google Weather)
  if (type === "get_weather") {
    window.open("https://www.google.com/search?q=weather", "_blank");
  }


  // Catch unknown types
  if (
    type !== "google_search" &&
    type !== "youtube_search" &&
    type !== "youtube_play" &&
    type !== "open_website" &&
    type !== "instagram_open" &&
    type !== "facebook_open" &&
    type !== "linkedin_open" &&
    type !== "play_music" &&
    type !== "get_date" &&
    type !== "get_day" &&
    type !== "get_time" &&
    type !== "get_month" &&
    type !== "calculator_open" &&
    type !== "get_weather" &&
    type !== "general"
  ) {
    speak("Sorry, I couldn’t understand that.");
  }
  }
   


   useEffect(()=>{
     const  SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
     
     const recognition = new SpeechRecognition()

     recognition.continuous = true,
     recognition.lang = 'en-US'
     recognition.interimResults = false;

     recognitionRef.current = recognition

     let isMounted = true;

     const startTimeout =setTimeout(()=>{
          if(!isSpeakingRef.current  && !isRecognizingRef.current) {
          try {
            recognition.start()
            console.log("Recognition requested to start")
          } catch (error) {
             if(error.name !== 'InvalidStateError'){
              console.error("Start error:",error)
             }
          }
         }
     },1000)


      // const safeRecognition =()=>{
       
      // }

        recognition.onstart =()=>{
           console.log("Recognition started")
          isRecognizingRef.current = true
          setListening(true)
        };

        recognition.onend =()=>{
          // console.log("Recognition ended")
          isRecognizingRef.current = false
          setListening(false)

          if(isMounted && !isSpeakingRef.current){
              setTimeout(()=>{
                if(isMounted){
                     try {
                        recognition.start();
                        console.log("Reocgnition Started")
                     } catch (error) {
                        if(error.name !== "InvalidStateError") console.error(error)
                     }
                }
              },1000)
          }

          
        };

         recognition.onerror =(event)=>{
         console.warn("Recognition error:",event.error);
          isRecognizingRef.current = false
          setListening(false)

           if(event.error !== "aborted" &&  isMounted && !isSpeakingRef.current){
             
                setTimeout(()=>{
                     if(isMounted){
                      try {
                         recognition.start();
                         console.log("Recognition restarted aftererror")
                      } catch (error) {
                         if(error.name !== "InvalidStateError") console.log(error)
                      }
                     }
                },1000);
           }
         };


     recognition.onresult =async (e) =>{
       const transcript = e.results[e.results.length -1][0].transcript.trim()
      //  console.log("heard:"+transcript)
       
        
      if(transcript.toLowerCase().includes(userData.assistantName.toLowerCase())){

        setAiText("")
         setUserText(transcript)

         recognition.stop()
         isRecognizingRef.current=false
         setListening(false)
       const data=await getGeminiResponse(transcript)
       console.log(data)
      //  -speak(data.response)
      handleCommand(data)
    setAiText(data.response)
      setUserText("")
      
      }


     };

     
         const greeting = new SpeechSynthesisUtterance(`Hello ${userData.name},what can i help you with?`);
         greeting.lang='hi-IN';
        
         window.speechSynthesis.speak(greeting);
     

   

        return ()=>{
          isMounted = false
          clearTimeout(startTimeout);
           recognition.stop()
           setListening(false) 
           isRecognizingRef.current = false
          //  clearInterval(fallback)
        }
     
      
   },[])



  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col gap-[20px] overflow-hidden'>
         <div className='w-[300px] h-[400px] flex justify-center items-center overflow-hidden rounded-4xl shadow-lg  '>
          <TfiMenuAlt className='lg:hidden  text-white absolute top-[20px] right-[25px] h-[25px] size-10' onClick={()=>setHam(true)} />
           <div className={` absolute lg:hidden top-[0] w-full h-full bg-[#00000018]  backdrop-blur-lg p-[20px] flex flex-col gap-[20px] items-start ${ham?"translate-0":"translate-x-full"} transition-transform`}>
             <GiSplitCross className=' text-white absolute top-[20px] right-[25px] h-[25px] size-10' onClick={()=>setHam(false)} />

             
      <button className='min-w-[150px] h-[60px] mt-[30px] text-black font-semibold  cursor-pointer  
      bg-gradient-to-r from-[#FF6BEE] to-[#4FC3F7] rounded-full text-[19px] hover:scale-110' 
      onClick={handleLogOut} >
     Log Out
      </button>

    <button className='min-w-[150px] h-[60px] mt-[30px] text-black font-semibold cursor-pointer  bg-gradient-to-r from-[#FF6BEE] to-[#4FC3F7] rounded-full
     text-[19px] px-[20px] py-[10px] hover:scale-110' onClick={()=>navigate("/customize")}>
     Customize your Assistant
    </button>

          <div className='w-full h-[2px] bg-gray-400 '></div>
          <h1 className='text-white font-semibold text-[19px]'>History</h1>

           <div   className='w-full  h-[400px] gap-[20px] overflow-auto flex flex-col '>{userData.history?.map((his,index)=>(
                    <span key={index} className='text-gray-200 text-[18px] '>{his}</span>
         ) )} </div>
           </div>

      <button className='min-w-[150px] h-[60px] mt-[30px] text-black font-semibold absolute hidden lg:block top-[20px] right-[20px] cursor-pointer  
      bg-gradient-to-r from-[#FF6BEE] to-[#4FC3F7] rounded-full text-[19px] hover:scale-110' 
      onClick={handleLogOut} >
     Log Out
      </button>

    <button className='min-w-[150px] h-[60px] mt-[30px] text-black font-semibold absolute hidden lg:block top-[100px] right-[20px] cursor-pointer  bg-gradient-to-r from-[#FF6BEE] to-[#4FC3F7] rounded-full
     text-[19px] px-[20px] py-[10px] hover:scale-110' onClick={()=>navigate("/customize")}>
     Customize your Assistant
    </button>


          <img src={userData?.assistantImage} alt="" className='h-full object-cover rounded-2xl' />
         </div>
         <h1 className='text-white text-[25px] font-semibold'>I'm {userData?.assistantName}</h1>
          
          {!aiText && <img src={userImg} alt="" className='w-[200px]' /> }
           {aiText && <img src={aiImg} alt="" className='w-[200px]' /> }


           <h1 className='text-white text-[18px] font-semibold text-wrap'>{userText?userText:aiText?aiText:null}</h1>
          
    </div>
  )
}

export default Home

