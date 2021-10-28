class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token

    has_many :wines
    has_many :ratings, dependent: :destroy
    has_many :favorites, dependent: :destroy

    has_many :followers,
        foreign_key: :followed_id,
        class_name: 'Follow'

    has_many :followings,
        foreign_key: :follower_id,
        class_name: 'Follow'

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        generate_session_token
        save!
        self.session_token
    end

    # logged in user follows this user?
    def following?
        if Current.user
            Current.user.followings.where(followed_id: self.id).length > 0
        else
            false
        end
    end

    private

    def ensure_session_token
        generate_session_token unless self.session_token
    end

    def generate_session_token
        self.session_token = new_session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end
end