class SubjectsController < ApplicationController
    before_action :set_subject, only: [:show, :update, :destroy]

  def create
    @subject = Subject.new(subject_params)
    if @subject.save
      render json: @subject ,status: :created
    else
      render json: @subject.erros, status: :unprocessable_entity
    end
  end

  def show
    render json: @subject, status: 200
  end

  def search
    @q = Subject.ransack(name_or_teacher_cont: params[:q])
    @Subject = @q.result
    render json: @Subject
  end

  def index
    @subject = Subject.all
    render json: @subject
  end

  def update
    if @subject.update_attributes(subject_params)
      render json: @subject
    else
      render json: @subject.erros ,status: :unprocessable_entity
    end
  end

  def destroy
    @subject.destroy
    render json: {status: 'SUCCESS', message:'Deleted subject', data:@subject},status: :ok
  end

  private
    def set_subject
      @subject = Subject.find(params[:id])
    end


    def subject_params
        params.require(:subject).permit(:name,:teacher,:year,:semester)
    end
end
