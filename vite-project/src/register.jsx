import { Link  } from 'react-router-dom';
import React from 'react'
import { useEffect , useState } from 'react';

const Register = () => {

  const [name , setName] = useState('');
  const [password , setPassword]  = useState('')
   const handleSubmit = (e) => {
    console.log('Logging in...', name, password)
 const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    console.log(name, password);
    
    if (name !== '' && password !== '') {
      fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password }),
      })
        .then(res => { 
          if(!res.ok){ 
            throw new Error(res.statusText);
          }else{ 
            // alert(`thank you for register ${name}`);
          }
        })
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }
  }, [name, password]);

};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="flex w-[800px] rounded-3xl overflow-hidden shadow-2xl bg-white">
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://tse4.mm.bing.net/th/id/OIP.A362SYBILckNTa284AGCfQHaFP?rs=1&pid=ImgDetMain')`,
          }}
        ></div>
        <div className="w-1/2 p-10 flex flex-col justify-center gap-6">
          <h2 className="text-3xl font-bold text-[#37372f] text-center">Rigister</h2>

          <div onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-gray-600 font-semibold">Username</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="p-3 w-full bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-semibold">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" className="p-3 w-full bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="bg-[yellow] hover:bg-purple-700 text-black font-semibold py-3 rounded-xl transition duration-300"
            >
              Sign In
            </button>
          </div>

          <p className="text-sm text-center text-gray-500">
            No account?{' '}
            <span to="/login" className="text-purple-600 font-medium hover:underline cursor-pointer">
            <Link to='/login'>login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register
