

const Test = ({name,children}) => {
console.log(name)
    return (
        <div>
            <h2>Hello World!!!</h2>
            {children}
        </div>
    );
};

export default Test;