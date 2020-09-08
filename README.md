# Elevator Pitch (Long)
Rocket Journal is the best welless and productivity tool for you in 2020. It documents memories and tasks of your life, display them beautifully. Take rocket notes on the go by talking to Rocket Journal in plain English! Inspired by Bullet Journal and Moleskine CSS. Be productivity. Be well. Get things done fast.

# Pitch (Short)
Rocket Journal is the best wellness productivity tool for you. Document memories, tasks on the go, display them beautifully by talking to RJ in plain English! Inspired by Bullet Journal, Moleskine. 

# Technology
- Wit.ai (Natural Language Processing layer NLP)
- JavaScript (API)
- Firebase : Firestore, Firebase Auth (Real time JSON doc storage)


# Steps
## Github Repo
[repo](https://github.com/theoptips/witSub)

# Term of Use
- All rights reserved. 
- Source code, demo app, firebase database for hackathon judging purpose only.
- All other usage not permitted. 
- Contact optanovo@gmail.com

## Demo App
1. Visit [Demo](https://rocketjournal-b9099.wl.r.appspot.com)
1. Sign up for account
1. Log in 
1. (Note factory, placeholder data is loaded once loggedin)
1. Submit and try the following utterance TODO
1. Try sample utterance: add Register for Hack to Monday list
1. Try sample utterance multiple times: remove first item in Monday
1. Try sample utterance again: add Register for Hack to Monday list
1. (Note currently, the logic is implemented for demo purpose on the Monday list Only)
1. (Limited implementation due to hackathon time limit, see cool features, next steps in Next Step section)

![Demo Image](demoImage01.PNG)

## How to Run Locally
1. Download [repo](https://github.com/theoptips/witSub)
1. Unzip if needed
1. cd into 
1. Launch a simple python server to load index.html using
1. python3 -m http.server




# Past, Present State, Future State, Next Step, Current Issues
Right only the weekly planner Monday sub list is implemented for hackathon demo purpose.
Next step is easy to implement for all days. Wit.ai does not need retraining. Extrapolates well thanks to the build in datetime entity. 

*Cool Feature* It will be SO MUCH FUN, when time permits, to implement the bubble tracker on the bottom right. 

*Cool Feature* The next step for RocketJournal is to implement the cool bullet marketing in Bullet Journal : o for events, • for tasks, * for important, - for notes. It is so much fun. It is actually very easy with css custom bullet. [Custom Bullet](https://web.dev/css-marker-pseudo-element/). Contact me. I can tell you all about optanovo@gmail.com

Providing for sample utterances. Wit.ai is a convenient one shot or few shot NLP model, it associates some keywords with message_body or datetime, even if it is actually ordinal,for example "the first item" is parsed as entity datetime because of the keyword the. Removing the keyword "first", it can parse as ordinal. 

A trick I used in this project is to call wit.ai twice. Once for the entire input, then for the message_body input to identify the ordinal entity. Ideally, wit.ai is smart enough to associate ordinal value with all the remove intents but right now it is not automatically doing so. Despite adding many sample utterances. 



# Credit
- AI, JavaScript code, Wit.ai API, logic created by Yu Sun for Wit.ai Hackathon September 2020.
- CSS Codepen of Bullet Journal by [Olivia](https://twitter.com/meowlivia_) Not affiliated. External, not a part of the team, not part of the hackathon. Initial HTML version 0, all style.css. 