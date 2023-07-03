
const Footer = () => {
//   const [input, setInput] = useState();

//   const searchurl = `${input}`;

//   async function fetchData() {
//     try {
//       const res = await fetch(searchurl);
//       const data = await res.json();
//       setNewsdata(data.hits);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   function handleSubmit(e) {
//     e.prevent.Default;
//   }

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#Guidelines">Guidelines &#124;</a>
          </li>
          <li>
            <a href="#FAQ">&nbsp;FAQ &#124;</a>
          </li>
          <li>
            <a href="#Lists">&nbsp;Lists &#124;</a>
          </li>
          <li>
            <a href="#API">&nbsp;API &#124;</a>
          </li>
          <li>
            <a href="#Security">&nbsp;Security &#124;</a>
          </li>
          <li>
            <a href="#Legal">&nbsp;Legal &#124;</a>
          </li>
          <li>
            <a href="#Apply">&nbsp;Apply to YC &#124;</a>
          </li>
          <li>
            <a href="#Contact">&nbsp;Contact</a>
          </li>
        </ul>
      </nav>
      
        <form>
          <label name="search">Search:
            <input></input>
          </label>
        </form>
      
    </>
  );
};

export default Footer;
