json.extract! user, :id, :username
json.avatar [url_for(user.avatar)]