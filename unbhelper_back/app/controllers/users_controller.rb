class UsersController < ApplicationController
    before_action :set_user, only: %i[show update remove]
    before_action :valid_token!, only: [:search :update]

    # GET
    # Shows all users
    def index
    @users = User.all
    render json: @users
    end

    # GET
    # searches in name or email with ransack
    def search
    @q = User.ransack(name_or_email_cont: params[:q])
    @user = @q.result
    render json: @user
    end

    # GET - Shows one user by :id
    # set_user
    def show
    render json: @user
    end

    # POST - empty user
    # unsaved
    def new
    @user = User.new
    end

    # POST - Creates an user
    # automaticaly saves it
    def create
    @user = User.new(user_params)

    if @user.save
        render json: { status: 'User created Successfully' }, status: :created
    else
        render json: { errors: @user.errors.full_messages }, status: :bad_request
    end
    end

    # PUT/PATCH
    # updates an existing user
    def update
    user = User.find_by(token: params[:token].to_s)
    if user.update(user_params)
        render json: user
    else
        render json: { erro: "Couldn't update User" }
    end
    end

    # DELETE
    # removes all users
    def destroy
    @users = User.all

    if @users.delete
        render json: { msg: 'Users deleted' }
    else
        render json: { erro: 'Error deleting users' }
    end
    end

    # DELETE
    # removes one user by id
    def remove
    if @user.delete
        render json: { msg: "User with id:#{@user.id} deleted" }
    else
        render json: { erro: "Error deleting user (id:#{@user.id})" }
    end
    end

    # Login method - PUT
    def login
    user = User.find_by(email: params[:email].to_s.downcase)

    if user&.authenticate(params[:password])
        auth_token = JsonWebToken.encode(user_id: user.id)
        user.update_columns(token: auth_token)
        render json: { auth_token: auth_token }, status: :ok
    else
        render json: { error: 'Invalid username / password' }, status: :unauthorized
    end
    end

    # Logout method - PUT
    def logout
    user = User.find_by(token: params[:token].to_s)
    user.update_columns(token: nil)

    if user.token == nil
        render json: {msg: "logged out" }
    else
        render json: {error: "Something went wrong" }
    end
    end

    # Private methods for setting parameters
    # and making a pattern for finding an user
    private

    def user_params
    params.require(:user).permit(:name, :email, :admin, :password, :password_confirmation)
    end

    def set_user
    @user = User.find(params[:id])
    end
end
