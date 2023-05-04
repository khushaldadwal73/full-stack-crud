package com.example.demo.Exception;

public class UserNotFoundExceptioin extends RuntimeException{
    public UserNotFoundExceptioin(Long id ){
        super("user not found the with id" + id);
    }
}
