package com.nodehunters.backend;

import com.nodehunters.backend.auth.models.AuthUser;
import com.nodehunters.backend.auth.models.Role;
import com.nodehunters.backend.auth.repository.RoleRepository;
import com.nodehunters.backend.auth.repository.UserRepository;
import com.nodehunters.backend.entity.Destination;
import com.nodehunters.backend.entity.SpaceShip;
import com.nodehunters.backend.entity.Tour;
import com.nodehunters.backend.repository.AppUserRepository;
import com.nodehunters.backend.repository.DestinationsRepository;
import com.nodehunters.backend.repository.PaymentCardRepository;
import com.nodehunters.backend.repository.TourRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.sql.Date;
import java.util.HashSet;
import java.util.List;
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
	CommandLineRunner fillDatabase(AppUserRepository appUserRepository, PaymentCardRepository paymentCardRepository, DestinationsRepository destinationsRepository, TourRepository tourRepository){
		return args -> {
			System.out.println("Filling the database");
			// Create a from destination
			// Create a to destination
			// create a Tour

			Destination fromDestination = Destination.builder()
					.name("From Destination")
					.images(List.of("https://picsum.photos/200/300"))
					.description("From Destination Description")
					.point("point1")
					.planet("region1")
					.build();

			Destination toDestination = Destination.builder()
					.name("To Destination")
					.images(List.of("https://picsum.photos4/200/300", "https://picsum.photos5/200/300"))
					.description("To Destination Description")
					.point("point2")
					.planet("region2")
					.build();

			SpaceShip spaceShip = SpaceShip.builder()
					.name("SpaceShip")
					.type("type1")
					.numberOfClassOneSeats(10)
					.numberOfClassTwoSeats(20)
					.numberOfClassThreeSeats(30)
					.registrationNumber("reg1")
					.description("SpaceShip Description")
					.images(List.of("https://picsum.photos1/200/300", "https://picsum.photos2/200/300"))
					.build();

			Tour tour = Tour.builder()
					.bookings(null)
					.classOneUnitPrice(10)
					.classTwoUnitPrice(20)
					.classThreeUnitPrice(30)
					.to(toDestination)
					.from(fromDestination)
					.departureDate(Date.valueOf("2024-05-05"))
					.arrivalDate(Date.valueOf("2025-05-05"))
					.spaceShip(spaceShip)
					.build();

			Destination fromDestination2 = Destination.builder()
					.name("From Destination2")
					.images(List.of("https://picsum.photos/200/300"))
					.description("From Destination Description2")
					.point("point1")
					.planet("region1")
					.build();

			Destination toDestination2 = Destination.builder()
					.name("To Destination2")
					.images(List.of("https://picsum.photos4/200/300", "https://picsum.photos5/200/300"))
					.description("To Destination Description2")
					.point("point2")
					.planet("region2")
					.build();

			SpaceShip spaceShip2 = SpaceShip.builder()
					.name("SpaceShip2")
					.type("type1")
					.numberOfClassOneSeats(10)
					.numberOfClassTwoSeats(20)
					.numberOfClassThreeSeats(30)
					.registrationNumber("reg1")
					.description("SpaceShip Description2")
					.images(List.of("https://picsum.photos1/200/300", "https://picsum.photos2/200/300"))
					.build();

			Tour tour2 = Tour.builder()
					.bookings(null)
					.classOneUnitPrice(10)
					.classTwoUnitPrice(20)
					.classThreeUnitPrice(30)
					.to(toDestination2)
					.from(fromDestination2)
					.departureDate(Date.valueOf("2023-09-05"))
					.arrivalDate(Date.valueOf("2024-01-05"))
					.spaceShip(spaceShip2)
					.build();

			tourRepository.save(tour);
			tourRepository.save(tour2);
		};
	}
}
