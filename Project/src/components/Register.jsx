import "./Register.css"

export default function Register(){
    return(
        <div className="reg">
            <div className="register d-flex justify-content-center align-items-center">
        
            
        <form action="" className="row" method="get">
            <h1 className="text-center">Register</h1>
            <div className="col-lg-6">
              <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control shadow-none" name="username" id="username" placeholder=""/>
                  
              </div>
  
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control shadow-none" name="email" id="email" placeholder="abc@mail.com"/>
                  
              </div>
  
              <div className="mb-3">
                  <label htmlFor="rollno" className="form-label">Roll Number</label>
                  <input type="text" className="form-control shadow-none" name="rollno" id="rollno"/>
              </div>
  
            </div>
              
            <div className="col-lg-6">
              <div className="mb-3">
                  <label htmlFor="year" className="form-label">Year</label>
                  <select className="form-select shadow-none" name="year" id="year">
                      <option  value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                  </select>
              </div>
  
              <div className="mb-3">
                  <label htmlFor="branch" className="form-label">Branch</label>
                  <select className="form-select shadow-none" name="branch" id="branch">
                      <option value="Biotechnology">Biotechnology</option>
                      <option value="Chemical Engineering">Chemical Engineering</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Civil Engineering">Civil Engineering</option>
                      <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
                      <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                      <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                      <option value="Mechanical Engineering">Mechanical Engineering</option>
                      <option value="Metallurgical and Materials Engineering">Metallurgical and Materials Engineering</option>
                  </select>
              </div>
  
              <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control shadow-none" name="password" id="password" placeholder="Password"/>
              </div>
  
            </div>
            <div className="mb-3 text-center mt-3">
              <button type="submit" className="btn btn-primary shadow-none w-75">Submit</button>
            </div>
          </form>
    </div>
        </div>
    
    )
}