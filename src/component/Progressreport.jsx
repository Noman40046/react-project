import ProgressBar from 'react-bootstrap/ProgressBar';


 function Progressreport() {
  return (
    <div className='container mt-5'>
      <div className='progresses'>
      <h1 className='mb-5 text-center'>Progress Report</h1>
     <h5>Furniture</h5>
      <ProgressBar className='mb-2' variant="info" now={40} />
     <h5>Electronics</h5>
      <ProgressBar className='mb-2' variant="info" now={20} />
     <h5>Laptops</h5>
      <ProgressBar className='mb-2' variant="info" now={60} />
     <h5>Tables</h5>
      <ProgressBar className='mb-2' variant="info" now={80} />

      </div>
  
    </div>
  ); 
}

export default Progressreport;

