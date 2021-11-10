class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, uniqueness: true
  validates :username, :email, :password_digest, presence: true
  validates :username, :password, length: {minimum: 6, maximum: 64}, allow_nil: true

  # has_one_attached :avatar

  has_one :avatar,
  foreign_key: :user_id,
  class_name: :Avatar,
  dependent: :destroy

  has_many :artworks,
  foreign_key: :artist_id,
  class_name: :Art,
  dependent: :destroy

  has_many :comments,
  foreign_key: :commenter_id,
  dependent: :destroy

  has_many :likes,
  as: :likeable,
  dependent: :destroy

  has_many :likes_given,
  foreign_key: :liker_id,
  class_name: :Like,
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
