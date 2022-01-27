class Api::TaggingsController < ApplicationController

  before_action :underscore_params!

  # def create
  #   Tagging.transaction do
  #     @taggings = Tagging.create!(taggings_params)
  #   end
  #   if !@taggings
  #     render json: @taggings.errors.full_messages, status: 422
  #   end
  #   # render
  # end

  def create
    @tagging = Tagging.new(tagging_params);
    if @tagging.save

    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  # def update
  #   @tagging = Tagging.find_by(id: params[:id])
  #   if @tagging
  #     if @tagging.update_attributes(tag_id: params[:tag_id]);
  #       render json: ["Successfully changed Tagging"], status: 200
  #     else
  #       render json: @tagging.errors.full_messages, status: 422
  #     end
  #   else
  #     render json: ['Something went wrong'], status: 401
  #   end
  # end

  def update
    # Convert params to a hash. Iterate over N items.
    # p 'FULL DATA OBJECT'
    # p params
    # p 'Tagging start here ========'
    @taggings = []
    params[:taggings].each do |tagging|
      case tagging[1]['actiontype']
      when 'update'
        id = tagging[1]['tagging_id'].to_i
        tagging[1].delete('tagging_id')
        tag_id = tagging[1]['tag_id']
        t = Tagging.find_by(id: id)
        if t.update_attributes!(tag_id: tag_id)
          @taggings.push(t)
          # p "UPDATED TAGGING #{id}"
        else
          # p 'SOMETHING WENT WRONG WHEN UPDATING'
        end
      when 'create'
        t = Tagging.new({
          tag_id: tagging[1]["tag_id"],
          taggable_id: tagging[1]["taggable_id"],
          taggable_type: tagging[1]["taggable_type"]
        })
        if t.save
          @taggings.push(t)
          # p "CREATED NEW TAGGING"
        else
          # p 'SOMETHING WENT WRONG WHEN CREATING'
        end
      when 'delete'
        id = tagging[1]['tagging_id'].to_i
        t = Tagging.find_by(id: id)
        if t
          if t.delete
            # p "DELETED A TAGGING #{id}"
          else
            # p "SOMETHING WENT WRONG WHEN DELETING #{id}"
          end
        else
          # p "COULD NOT FIND TAG #{id} TO DELETE"
        end
      else
        # p 'NO ACTIONTYPE DEFINED'
      end
      # p tagging[1].permit(:tag_id, :taggable_id, :taggable_type)
      # p 'END TAG-----'
    end
    if @taggings.length > 0
      # render "/api/taggings/show"
    else
      # p "NO RETURN TAGGINGS"
    end
    # p 'Tagging ends here ========'
  end

  def destroy
    @tagging = Tagging.find_by(id: params[:id])
    if @tagging
      if @tagging.delete
        render json: ["Successfully deleted Tagging"], status: 200
      else
        render json: @tagging.errors.full_messages, status: 422
      end
    else
      render json: ['No Tagging by that Id'], status: 401
    end
  end

  private

  def tagging_params
    params.require(:tagging).permit(:tagging_id, :tag_id, :taggable_id, :taggable_type, :actiontype)
    # params.permit(taggings: [:tag_id, :taggable_id, :taggable_type]).require(:taggings)
  end

end
