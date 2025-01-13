// export const API_KEY = 'AIzaSyDZv_7hD0Dw-u6VkqqOuhXKNM0pqzVFJgE'
//export const API_KEY = 'AIzaSyAqVfs9BXad1TG_InXEQzYd0twHCQNJbqY'
export const API_KEY = 'AIzaSyCx7XtzHvdiqLS0PsLT6DRGQFLLYF2Fw6A'
export const value_converter = (value) => {
    if (value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}