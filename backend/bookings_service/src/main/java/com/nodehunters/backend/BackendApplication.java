package com.nodehunters.backend;

import com.nodehunters.backend.auth.models.AuthUser;
import com.nodehunters.backend.auth.models.Role;
import com.nodehunters.backend.auth.repository.RoleRepository;
import com.nodehunters.backend.auth.repository.UserRepository;
import com.nodehunters.backend.repository.AppUserRepository;
import com.nodehunters.backend.repository.PaymentCardRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner run(RoleRepository roleRepository, UserRepository userRepository, PasswordEncoder passwordEncoder){
		return args -> {
			if(roleRepository.findByAuthority("ADMIN").isPresent()) return;
			Role adminRole = roleRepository.save(new Role("ADMIN"));
			Role userRole = roleRepository.save(new Role("USER"));

			Set<Role> roles = new HashSet<>();
			roles.add(adminRole);

			AuthUser admin = new AuthUser(1, "admin@email.com","admin", passwordEncoder.encode("adminpass"), roles);
			AuthUser user = AuthUser.builder()
					.email("testUser@email.com")
					.name("testUser")
					.password(passwordEncoder.encode("testUserPass"))
					.authorities(Set.of(userRole))
					.build();
			userRepository.save(admin);
			userRepository.save(user);
		};
	}

	@Bean
	CommandLineRunner fillDatabase(AppUserRepository appUserRepository, PaymentCardRepository paymentCardRepository){
		return args -> {
			System.out.println("Filling the database");
		};
	}
}
