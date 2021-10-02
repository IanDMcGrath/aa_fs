# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# keeps snakecase in ruby and camelcase in js
Jbuilder.key_format camelize: :lower