import React,{useState,useEffect} from 'react'
import './App.css'

function App() {
  const [result, setresult] = useState("");
  const handleKeyDown = ({keyCode,shiftKey}) => {
    console.log(keyCode)
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
      setresult(result+(keyCode-48))
    } else if ((keyCode >= 96 && keyCode <= 105)) {
      setresult(result+(keyCode-96))
    } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      setresult(result+"+")
    } else if (keyCode === 109 || keyCode === 189) {
      setresult(result+"-")
    } else if (keyCode === 106 || (keyCode === 56 && shiftKey)) {
      setresult(result+"*")
    } else if (keyCode === 111 || keyCode === 191) {
      setresult(result+"/")
    } else if (keyCode === 53 && shiftKey) {
      setresult(result+"%")
    }else if (keyCode === 110 || keyCode === 190 && !shiftKey) {
      setresult(result+".")
    }else if (keyCode === 32) {
      setresult(result+" ")
    }
    else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
      setresult(
        String(eval(result)).length > 3 &&
          String(eval(result)).includes(".")
          ? String(eval(result).toFixed(4))
          : String(eval(result))
      );
    } else if (keyCode === 8) {
      setresult(result.substr(0, result.length - 1))
    } else if (keyCode === 27|| keyCode === 46) {
      setresult("")
    }
  }
  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown)
    return () => document.body.removeEventListener('keydown', handleKeyDown)
  })
  return (
    <div className="container">
      <div className="input">{result}</div>
        <div className="grid-4">
        <button onClick={() => setresult("")} value="" style={{backgroundColor:'#c04444'}}>
          AC
        </button>
        <button onClick={() => setresult(result.substr(0, result.length - 1))}>
          C
        </button>
        <button onClick={(e) => setresult(result + e.target.value)} value="%">
          %
        </button>
        <button onClick={(e) => setresult(result + e.target.value)} value="/" className="opt-button">
          /
        </button>
        </div>
        <div className="grid-4">
        <button onClick={(e) => setresult(result + e.target.value)} value="7">
          7
        </button>
        <button onClick={(e) => setresult(result + e.target.value)} value="8">
          8
        </button>
        <button onClick={(e) => setresult(result + e.target.value)} value="9">
          9
        </button>
        <button onClick={(e) => setresult(result + e.target.value)} value="*" className="opt-button">
          x
        </button>
        </div>
        <div className="grid-4">
        <button onClick={(e) => setresult(result + e.target.value)} value="4">
          4
        </button>
        <button onClick={(e) => setresult(result + e.target.value)} value="5">
          5
        </button>
        <button onClick={(e) => setresult(result + e.target.value)} value="6">
          6
        </button>
        <button onClick={(e) => setresult(result + e.target.value)} value="-" className="opt-button">
          -
        </button>
        </div>
        <div className="grid-4">
        <button onClick={(e) => setresult(result + e.target.value)} value="1">
          1
        </button>
        <button onClick={(e) => setresult(result + e.target.value)} value="2">
          2
        </button>
        <button onClick={(e) => setresult(result + e.target.value)} value="3">
          3
        </button>
        <button onClick={(e) => setresult(result + e.target.value)} value="+" className="opt-button">
          +
        </button>
        </div>
        <div className="grid-4">
        <button onClick={(e) => setresult(result + e.target.value)} value="0">
          0
        </button>
        <button onClick={(e) => setresult(result + e.target.value)} value=" ">
          {" "}
        </button>
        <button onClick={(e) => setresult(result + e.target.value)} value=".">
          .
        </button>
        <button
          onClick={(e) => {
            try {
              setresult(
                String(eval(result)).length > 3 &&
                  String(eval(result)).includes(".")
                  ? String(eval(result).toFixed(4))
                  : String(eval(result))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
          style={{backgroundColor:'#018645'}}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
