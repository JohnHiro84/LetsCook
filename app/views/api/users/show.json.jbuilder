json.extract! @user, :username, :id, :session_token, :password_digest

json.partial! 'api/users/user', user: @user
