import React from 'react'

// export function Decrypt3(input: string): string {
//   const decrypted: string[] = []; 

//   for (let i = 0; i < input.length; i++) {
//     let a = i;
//     if (a > 9) {
//       a = i - 9;
//     }

//     if (/\d/.test(input[i])) {      
//       decrypted[i] = String.fromCharCode(((input.charCodeAt(i) - 48 - a + 10) % 10) + 48);
//     } else {
      
//       decrypted[i] = input[i];
//     }
//   }

//   console.log(decrypted)

//   return decrypted.join(' '); 
// }

const Navbar = () => {
function EncryptAbs(input: string, shift: number): string {
    const encrypted: string[] = [];
  
    for (let i = 0; i < input.length; i++) {
      const charCode = input.charCodeAt(i);
  
      if (/\w/.test(input[i])) { // Check for alphanumeric characters
        // Handle uppercase and lowercase separately
        const baseCharCode = charCode >= 65 && charCode <= 90 ? 65 : 97; // 'A' or 'a'
  
        // Apply absolute shift, wrapping around if necessary
        let newCharCode = (charCode - baseCharCode + shift) % 26;
        newCharCode = (newCharCode + baseCharCode) % 26; // Ensure positive range
  
        encrypted[i] = String.fromCharCode(newCharCode + baseCharCode);
      } else {
        // Leave non-alphanumeric characters unchanged
        encrypted[i] = input[i];
      }
    }
  
    return encrypted.join('');
  }

  const messaage = "Hello, world!";
  const encryt = EncryptAbs(messaage, 2);
  console.log(encryt)

  //! To Decrypt 
  function Decrypt3(input: string): string {
    const decrypted: string[] = []; 
  
    for (let i = 0; i < input.length; i++) {
      let a = i;
      if (a > 9) {
        a = i - 9;
      }
  
      if (/\d/.test(input[i])) {      
        decrypted[i] = String.fromCharCode(((input.charCodeAt(i) - 48 - a + 10) % 10) + 48);
      } else {
        
        decrypted[i] = input[i];
      }
    }
  
    console.log(decrypted)
  
    return decrypted.join(' '); 
  }

  // Decrypt3("3029347585483234");
console.log(Decrypt3("3029347585483234"))

  return (
    <div>
        Navbar
        
    </div>
  )
}

export default Navbar