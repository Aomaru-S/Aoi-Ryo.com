useradd -G wheel souhei
passwd souhei
# `souhei`ユーザで再接続
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl start docker
sudo systemctl enable docker
# `02-aoi-ryo.conf`を`/etc/ssh/sshd_config.d/`に配置
sudo systemctl restart sshd
sudo hostname www
sudo dnf install git
sudo git clone https://github.com/Aomaru-S/Aoi-Ryo.com.git /Aoi-Ryo.com
git config --global --add safe.directory /Aoi-Ryo.com
sudo chown -R souhei:wheel /Aoi-Ryo.com
cd /Aoi-Ryo.com
