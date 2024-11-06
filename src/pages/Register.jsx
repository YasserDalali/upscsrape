
const Register = () => {


  const handleCopy = async (text) => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!"); // Optional feedback
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  };

  return (
  

<div className="relative" onClick={() => handleCopy("woifhad")} >

      <div><h1 style={{color: "Red"}}>Bonjours a tous</h1></div>

</div>


  );
};

export default Register;
