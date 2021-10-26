//This is an exerpt from SpacePilot
//2021 CallumBennett-Dev
//callumbennett-dev.github.io

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
//These are extra frameworks to make the file work within the Unity Game Engine

public class PlayerBehaviour : MonoBehaviour //This is the class
{
    //Variables
    //the "public" at the front means that other C# files can acccess those variables
    //If i wanted to update the score in a different file, I would use "PlayerBehaviour.score"
    public static int score = 0;
    public float speed;
    public static bool gameOver = false;
    public GameObject gameOverPopUp;
    public Text scoreText;
    public Text highScoreText;
    public static int highScore;

    // Start is called before the first frame update
    void Start()
    {
        //Setting gameOver as false so the game runs
        gameOver = false;
        Time.timeScale = 1;
        //Removing the "you died" popup
        gameOverPopUp.SetActive(false);
        //Update the score every second
        InvokeRepeating("incrementScore", 1f, 1f);
    }

    // Update is called once per frame
    void Update()
    {
        //Moving the player along the x axis
        float h = Input.GetAxis("Horizontal");
        Vector2 movement = new Vector2(speed * h, 0);
        transform.Translate(movement * Time.deltaTime, Space.World);
        //This if statement checks if the player is out of frame. If they are, put them back in frame
        if (transform.position.x < -8.7)
        {
            transform.position = new Vector2(-8.7f, -4f);
        } else if (transform.position.x > 8.7)
        {
            //This else if statement checks if the player is out of frame. If they are, put them back in frame
            transform.position = new Vector2(8.7f, -4f);
        }
        //Checking if the player collides with the obstacle
        CheckGameOver();
    }

    void incrementScore()
    {
        //Updating the score each second
        score = score + 1;
    }

    void CheckGameOver()
    {
        if (gameOver)
        {
            //This if statement is checking whether the score is greater than Highscore, and if it is,
            //  setting it as the new highscore
            if (score > PlayerPrefs.GetFloat("HighScore", 0))
            {
                PlayerPrefs.SetFloat("HighScore", score);
            }

            //Pausing the game once it has finished
            Time.timeScale = 0;

            //Setting the text for the gameover popup
            highScoreText.text = "Your high score is: " + PlayerPrefs.GetFloat("HighScore");
            scoreText.text = "Your score was: " + score;

            //Opening the popup
            gameOverPopUp.SetActive(true);
        }
    }
}
