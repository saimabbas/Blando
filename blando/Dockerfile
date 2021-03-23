# pull official base image
FROM python:3.6-slim

# Software version management
ENV GUNICORN_VERSION=20.0.4

# Environment setting
ENV APP_ENVIRONMENT production
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install required packages	
RUN apt-get update \
	&& apt-get install -y nginx supervisor \
	&& rm -rf /var/lib/apt/lists/*

# Install Gunicorn
RUN pip install gunicorn==$GUNICORN_VERSION

# Configure Nginx
RUN echo "daemon off;" >> /etc/nginx/nginx.conf && \
	rm /etc/nginx/sites-enabled/default
COPY ./nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

# Configure Supervisor
COPY ./supervisord/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY ./supervisord/gunicorn.conf /etc/supervisor/conf.d/gunicorn.conf

# Set work directory
RUN mkdir /app
WORKDIR /app

# Install dependencies
RUN pip install --upgrade pip
COPY ./app/requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Copy project
COPY ./app /app

# Set the entrypoint script
COPY ./entrypoint.sh /bin/entrypoint.sh
RUN chmod +x /bin/entrypoint.sh
ENTRYPOINT ["/bin/entrypoint.sh"]

# expose application port
EXPOSE 80 443