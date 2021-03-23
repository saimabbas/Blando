**Blando's Website**

This project is a simple hotsite for the brazilian dj Blando

Please **Ignore docker for now**, It's there for later when I'm going to deploy it.

To run this project locally:

- Enter the project folder and make a virtual environment

  cd path/to/project
  python3 -m venv venv

- Activate it

  source venv/bin/activate

- Install requirements

  pip install -r requirements.txt

- Now the frontend requirements

  cd app/frontend
  npm init
  npm install

- Now you can run the server with
  python manage.py runserver

- And the frontend on the frontend folder with
  npm run dev
