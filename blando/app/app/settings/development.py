from .common import *

DEBUG = True
ALLOWED_HOSTS = ["*"]
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '2+(n_pvy*#c(w)0eb!1hn@$*hmm$v@7ixi@ho#d930xe@*1mdj'