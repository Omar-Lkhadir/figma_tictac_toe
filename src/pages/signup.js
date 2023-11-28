import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

// Step 2: Define your component
const SignupPage = () => {
  return (
    <main>
      
      <div class="d">
       <nav class="bg-[#9A1032] w-[1521px] h-[84px] ">
        <StaticImage class="mt-5 ml-56"
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/l1.png"/>

        
      <div class="text-center -mt-10 mr-48  ">
    <a href="/" class="mx-4 text-white text-3xl ">Home</a>
    <a href="/" class="mx-4 text-white text-3xl font-Montserrat ">tictactoe</a>
    <a href="/" class="mx-4 text-white text-3xl font-Montserrat ">About</a>
    <a href="/" class="mx-4 text-white text-3xl ">Pricing</a>
  </div>
  <div class="flex justify-end mr-40 -mt-12 -space-x-14">
       
  <a href="/signup" class="flex w-62  h-16   p-3 text-[#9A1032] text-4xl relativ bg-white  border-2 pl-8 pr-8  pt-1 ">Sign In</a>

 
    </div></nav>
    <div className="flex justify-center items-center -translate-x-40">
   
    <div><StaticImage class="w-[300px] h-[520px] translate-x-96 translate-y-6 z-40  "
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/a14.png"/></div>
    <div><StaticImage class="w-[300px] h-[500px] mt-14 z-0  "
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/a12.png"/></div>
        
        
    <div class="w-[690px] h-[500px] p-10  mt-14 font- bg-white rounded-r-lg ">
    <div class="w-6 h-6 relative translate-x-96 left-56 bottom-4 ">
  <div class="absolute w-full h-0.5 bg-black transform rotate-45 origin-center"></div>
  <div class="absolute w-full h-0.5 bg-black transform -rotate-45 origin-center"></div>
</div>

  <div class="w-full max-w-md mx-auto">
    <div class="flex flex-col justify-center items-center">
      <h1 class="text-4xl font-bold text-gray-900 font-['Qatar2022']">Create an account</h1>
      <p class="text-lg text-gray-600 font-['Qatar2022']">Already have an ccount? <a href="/ams/sigup">Sign up</a></p>

      


      <div  className="font-normal font-['Poppins'] ">
          <label htmlFor="email">Email address</label> <br />
          <input type="text" name="email" class="rounded border-2 w-96"></input>
      </div>

      <div className="font-normal font-['Poppins']">
          <label htmlFor="password">password</label> <br />
          <input type="password" name="name" class="rounded border-2 w-96"></input>
      </div> <br />
      <div className="font-normal font-['Poppins']">
          <label htmlFor="password">Confirm Password</label> <br />
          <input type="password" name="name" class="rounded border-2 w-96"></input>
      </div> <br />

      <button className="bg-gray-300 hover:bg-black  text-white font-bold py-2 px-4  font-['Qatar2022'] rounded-full w-96">
      Sign In
    </button>
    <div class="flex flex-col justify-center items-center">
      <p class=" text-black font-['Qatar2022'] text-lg">Or, Sign in with <a href="https://www.google.com/" class="font-semibold">Google</a> or <a href="https://www.facebook.com/" class="font-semibold">Facebook</a>   </p></div>
    

    </div>
    
        
    
  </div>
</div>
</div>

    </div>
    

    </main>
  )
}


export const Head = () => <title>sign Page</title>


export default SignupPage