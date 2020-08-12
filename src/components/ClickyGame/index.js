import React from 'react'
import Image from "../Image"
import Navbar from "../Navbar"
import Description from "../Description"
import images from "./images.json"

class ClickyGame extends React.Component {
    state = {
        score: 0,
        images: images,
        message: "Click any hero image to begin the game"
    }

    componentDidMount() {
        this.shuffle();
    }

    handleGuess(id) {
        for (const image of this.state.images) {
            if (image.id === id) {
                if (!image.alreadyGuessed) {
                    this.handleCorrectGuess(id)
                } else {
                    this.handleIncorrectGuess();
                }
            }
        }
    }

    handleIncorrectGuess() {
        this.setState({ message: "Oh no! You guessed incorrectly, your score has been reset to 0"});
        this.reset();
    }

    handleCorrectGuess(id) {
        this.setState({ message: "Correct!"});
        for (const image of this.state.images) {
            if (image.id === id) {
                image.alreadyGuessed = true;
                this.setState({ images: this.state.images })
                var score = this.state.score;
                score = score + 1;
                this.setState({ score: score });
                if (score === 12) {
                    this.handleWin();
                } else {
                    this.shuffle();
                }
            }
        }
    }

    reset() {
        this.setState({ score: 0 });
        for (const image of this.state.images) {
            image.alreadyGuessed = false;
        }
        this.setState({ images: this.state.images })
        this.shuffle();
    }

    shuffle() {
        var shuffledImagesArr = [];
        var imagesCopyArr = this.state.images;
        for (var i = 0; i < 12; i += 1) {
            var randomIndex = Math.floor(imagesCopyArr.length * Math.random());
            shuffledImagesArr.push(imagesCopyArr[randomIndex]);
            imagesCopyArr.splice(randomIndex, 1);
        }
        this.setState({ images: shuffledImagesArr });
    }

    handleWin() {
        this.setState({ message: "Congratulations! You won! Refresh the page to play again."});
    }

    render() {
        return (
            <div>
                <Navbar score={this.state.score}/>
                <Description message={this.state.message}/>
                <div className="container">
                    <div className="row">
                        {this.state.images.map(image =>
                            <Image onClick={() => this.handleGuess(image.id)} url={image.url} key={image.id} />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default ClickyGame