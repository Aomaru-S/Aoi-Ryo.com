ls -d /etc/letsencrypt/live/aoi-ryo.com/

if [ $? -eq 0 ]; then
    sh /scripts/renew.sh
    echo /scripts/renew.sh
else
    sh /scripts/certonly.sh
    echo /scripts/certonly.sh
fi
