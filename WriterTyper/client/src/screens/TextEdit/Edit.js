import React, { Component } from 'react';
import { readOneByAuthor, editText } from '../../services/Crud'
import { withRouter } from 'react-router-dom'
import './Edit.css'

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [],
      wordCount: 0,
      characterCount: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  async componentDidMount() {
    const authorId = this.props.match.params.authorId
    const textId = this.props.match.params.textId
    const textToEdit = await readOneByAuthor(authorId, textId)
    this.setState({
      text: textToEdit
    })
  }
  wordCount = (str) => {
    const textArr = str.split(' ')
    this.setState({
      wordCount: textArr.length
    })
  }
  characterCount = (str) => {
    const textArr = str.split('')
    this.setState({
      characterCount: textArr.length
    })
  }
  handleTitleChange = (event) => {
    const newTitle = event.target.value
    this.setState({
      text: {
        title: newTitle,
      }
    })
  }
  handleChange = (event) => {
    const newText = event.target.value
    const wordArr = newText.split(' ').length
    const charArr = newText.split('').length
    this.setState({
      text: {
        content: newText,
        words: wordArr,
        characters: charArr
      }
    })
  }
  async handleSubmit(e) {
    e.preventDefault()
    const authorId = this.props.match.params.authorId
    const textId = this.props.match.params.textId
    const textData = this.state.text
    await editText(authorId, textId, textData)
    this.props.history.push('/read')
  }
  render() {
    const text = this.state.text
    return (
      <>
        <form
          onSubmit={this.handleSubmit}
          className='formEdit'>
          <textarea
            defaultValue={text.title}
            onChange={this.handleChange}
            className='shortInput'
          ></textarea>
          <textarea
            defaultValue={text.content}
            onChange={this.handleChange}
            className='longInput'
          >
          </textarea>
          <button
            type='submit'
            className='submitEdit'>
            Submit
            </button>
        </form>
      </>
    );
  }
}

export default withRouter(Edit);
