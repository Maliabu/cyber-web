"use client"
import local from "next/font/local";
import { redirect } from "next/navigation";
import { any } from "prop-types";

export function username(name: string){
    return name.split(" ").concat(String(Math.floor((Math.random() * 10) + 1)))
}

export function token(){
    function rand(){
        return String((Math.random().toString(36).substring(2)))
    }
    return rand()+rand()+rand()
}
export const togglePasswordVisibility = ()=>{
    let pass = document.getElementById("password")
    if(pass !== null){
    if(pass.getAttribute('type') === "password"){
        pass.setAttribute('type', 'text')
    } else{
        pass.setAttribute('type', 'password')
    }}
}

export function tokenise(){
    let name = '',email = '',username = ''
    if(window !== null){
        name = localStorage.getItem("name") || ''
        username = localStorage.getItem("username") || ''
        email = localStorage.getItem("email") || ''
    }
    return [name, username, email]
}

const encryptData = async (plainData: string, encryptionKey: string) => {
    // Generate a random 96-bit initialization vector (IV)
    const initVector = crypto.getRandomValues(new Uint8Array(12));
  
    // Encode the data to be encrypted
    const encodedData = new TextEncoder().encode(plainData);
  
    // Prepare the encryption key
    // use online aes encryption key generator to get a working key
    const cryptoKey = await crypto.subtle.importKey(
      "raw",
      Buffer.from(encryptionKey, "base64"),
      {
        name: "AES-GCM",
        length: 256,
      },
      true,
      ["encrypt", "decrypt"]
    );
  
    // Encrypt the encoded data with the key
    const encryptedData = await crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv: initVector,
      },
      cryptoKey,
      encodedData
    );
  
    // Return the encrypted data and the IV, both in base64 format
    return {
      encryptedData: Buffer.from(encryptedData).toString("base64"),
      initVector: Buffer.from(initVector).toString("base64"),
    };
  };
  
export const handleEncryption = async (data: any) => {
    return await encryptData(
      JSON.stringify({ data }),
      process.env.NEXT_PUBLIC_SECRET_KEY!
    );
};

export const decryptData = async (
    encryptedData: string,
    initVector: string,
    encryptionKey: string
  ) => {
    // Prepare the decryption key
    const cryptoKey = await crypto.subtle.importKey(
      "raw",
      Buffer.from(encryptionKey, "base64"),
      {
        name: "AES-GCM",
        length: 256,
      },
      true,
      ["encrypt", "decrypt"]
    );
  
    try {
      // Decrypt the encrypted data using the key and IV
      const decodedData = await crypto.subtle.decrypt(
        {
          name: "AES-GCM",
          iv: Buffer.from(initVector, "base64"),
        },
        cryptoKey,
        Buffer.from(encryptedData, "base64")
      );
  
      // Decode and return the decrypted data
      return new TextDecoder().decode(decodedData);
    } catch (error) {
      return JSON.stringify({ payload: null });
    }
};
  
export const handleDecryption = async ( encryptedData: any, initVector: any) => {
    const decryptedString = await decryptData(
      encryptedData!,
      initVector!,
      process.env.NEXT_PUBLIC_SECRET_KEY!
    );
  
    const responseData = JSON.parse(decryptedString)?.data;
  
    return responseData;
};

export function checkAdminLoginToken(){
  let token
  if(window !== undefined){
    // now access your localStorage
  token = localStorage.getItem("token")
  }
  if(token === ""){
    console.log(token)
    redirect("/admin/auth")
  }
}