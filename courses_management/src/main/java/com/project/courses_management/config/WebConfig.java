package com.project.courses_management.config;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                Dotenv dotenv = Dotenv.load();
                String frontendURL = dotenv.get("frontend_url");
                registry.addMapping("/api/v1/**").allowedOrigins(frontendURL)
                        .allowedMethods("GET", "POST", "PUT", "DELETE");
                ;
            }
        };
    }
}
