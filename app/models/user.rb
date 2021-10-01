class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, uniqueness: true
  validates :password_digest, :avatar, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true

  has_many :artworks,
  foreign_key: :artist_id,
  class_name: :Art,
  dependent: :destroy

  attr_reader :password

  before_validation :ensure_session_token!

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      user
    else
      return nil
    end
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    password_object = BCrypt::Password.new(self.password_digest)
    password_object.is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token!
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
