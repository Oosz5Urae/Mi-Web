class App extends React.Component {
    state = {
        markdown: ''
    }

handleChange = (e) => {
this.setState({
    markdown: e.target.value
})
}

    render() {
        const { markdown } = this.state;

       return(
         <div>
           <h2 className="text-center m-4">Convert your Markdown</h2>
           <div className="row">
            <div className="col-6">
                <h6>Enter your Markdown here:</h6>
                <textarea className="form-control" id="editor" value={markdown} onChange={this.handleChange}/>
                </div>
                <div className="col-6 preview" id="preview">
                <h6>See the result:</h6>
                <div className="preview">
<p>Hello people!</p>
</div>
                </div>
            </div> 
         </div>
       );
    }
}

ReactDOOM.render(<App/>, document.getElementById('app'));