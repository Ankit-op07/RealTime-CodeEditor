import  { useEffect, useRef, useState } from "react";
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/comment/comment';
import "../App.css"

const CodeEditor = ({socketRef}) => {

  // const [code,setCode] = useState<string>("")
  const codeRef = useRef("")
  const cmInstance = useRef(null)

  const editorConfig = {
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    styleActiveLine: true,
    lineWrapping: true,
    extraKeys: {
      "Ctrl-/": "toggleComment"
    },
  };

  useEffect(()=>{
    if(socketRef.current){
      socketRef.current.on("receiveCode",(text)=>{
        console.log(text)
        codeRef.current = text;
        cmInstance.current.setValue(text);
      })
    }
 

    return () => {
      socketRef.current.off("receiveCode");
  };
  },[socketRef.current])



  useEffect(() => {
      async function init (){
        const editor =  document.getElementById("codeEditor");
        cmInstance.current = await Codemirror.fromTextArea(editor, editorConfig);
  
        // cmInstance.current.setValue(code);

        cmInstance.current.on("change", (instance,changes) => {
          // setCode(cmInstance.current.getValue());
          const { origin } = changes;
          const code = cmInstance.current.getValue()
          if(origin !== "setValue"){
            socketRef.current.emit("shareCode",{code,roomId:(JSON.parse(localStorage.getItem("user"))).roomId});
          }
        })
      }
      init();
      console.log(codeRef.current);
      return (()=>{
        if (cmInstance.current) {
          cmInstance.current?.toTextArea();
        }
      })
  
  }, []);

  return <textarea className="resize-x" id="codeEditor"></textarea>;
};

export default CodeEditor;


