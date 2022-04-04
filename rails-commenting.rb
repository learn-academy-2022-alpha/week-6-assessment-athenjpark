# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The purpose of the code directly underneath this comment tag is to establish the child class, BlogPostsController, which is inheriting from the parent class, ApplicationController. Class inheritance is always denoted by the < symbol. Underneath the line of code where class inheritance is taking place, there is a method called index that is being established. The syntax for creating a Ruby method is always denoted by the keyword 'def' which is short for 'define' followed up by a descriptive name for the method, which is called 'index' in this case.
class BlogPostsController < ApplicationController
  def index
    # ---2) The purpose of the code directly underneath this comment tag is to display all blog posts. Index refers to one of the RESTful routes that is responsible for showing all and is also associated with the 'get' HTTPverb. In order to visually see this, the routes.rb file and the index.html.erb file must be updated. The @ symbol is responsible for establishing an instance variable called 'posts' and is assigned to BlogPost.all. The .all is an Active Record method that will showcase all of that data that is stored in the database. This instance variable will usually be incorporated in the index.html.erb file and in between embedded Ruby tags.
    @posts = BlogPost.all
  end

  # ---3) The purpose of the code directly underneath this comment tag is to display only one blog post. Show refers to one of the RESTful routes that is responsible for showing only one piece of data and is also associated with the 'get' HTTPverb. The routes.rb file and the show.html.erb file must be updated in order to see this visually. The @ symbol is establishing another instance variable called 'post' and is assigned to BlogPost.find(params[:id]). The .find is an Active Record method that will take in a parameter and this parameter allows us to add more information to our program by passing a value into the controller since this method is only responsible for showing one piece of data in the database. This instance variable will usually be incorporated in the show.html.erb file and in between embedded Ruby tags.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The purpose of the code directly underneath this comment tag is to allow users to add information to the database. New refers to one of the RESTful routes that displays a form for the user to interact with and is associated with the 'get' HTTPverb. The routes.rb file and the new.html.erb file must be updated in order to see this visually. The @ symbol is establishing an instance variable called 'new' and is assigned to BlogPost.new. In order to create the view for new, there are some very convenient helper methods such as form_with that will allow the user to input text and submit that new data to the database.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The purpose of the code directly underneath this comment tag is to allow users to submit information to the database. Create refers to one of the RESTful routes and is associated with the 'post' HTTPverb. One thing to keep in mind that that there is no view associated with the create method. The @ symbol is establishing an instance variable called 'post' and is assigned to BlogPost.create(blog_post_params). The blog_post_params is referred to as a strong params which provide control of what information is added into a database.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) The purpose of the code directly underneath this comment tag is to establish an instance variable called 'post' and assign it to BlogPost.find(params[:id]). The .find is an Active Record method that will take in a parameter and this parameter allows us to add more information to our program by passing a value into the controller since this method is responsible for editing a certain piece of data from the database.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The purpose of the code directly underneath this comment tag is to utilize the Active Record method .update which takes in the strong param blog_post_params in order to update an existing piece of data in the database. The instance variable @post has already been assigned to the .find method with the parameter of params[:id] in the line above. As mentioned earlier, blog_post_params is referred to as a strong params which provide control of what information is added and updated in a database.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) The purpose of the code directly underneath this comment tag is to redirect the user back to the specific blog post they were trying to delete IF for some reason there was an error with the delete functionality. The redirect_to is a specific method that redirects the user to a certain page and in this case, it would be blog post that they were trying to delete.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) The purpose of the keyword 'private' is to restrict the scope of a method call. Strong params are only meant to be called as arguments to the methods within a controller so they are listed under the private keyword in order to eliminate any possibility of the method being called anywhere else in the program.
  private
  def blog_post_params
    # ---10) The purpose of the code directly underneath this comment tag is to implement the strong params by utilizing two methods: require and permit. The require method essentially requires the attributes passed in to be present and the permit method allows certain items to be present.
    params.require(:blog_post).permit(:title, :content)
  end
end
