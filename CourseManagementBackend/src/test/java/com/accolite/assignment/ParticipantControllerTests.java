package com.accolite.assignment;

import com.accolite.assignment.domain.Participants;
import com.accolite.assignment.domain.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.module.paramnames.ParameterNamesModule;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ParticipantControllerTests {
    private MockMvc mockMvc;
    @Autowired
    private WebApplicationContext context;

    ObjectMapper objectMapper = new ObjectMapper()
            .registerModule(new ParameterNamesModule())
            .registerModule(new Jdk8Module())
            .registerModule(new JavaTimeModule());

    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

    @Test
    public void getParticipantWithCourseNameTest() throws Exception {
        MvcResult result = mockMvc.perform(get("/participants/Angular")
                .content(MediaType.APPLICATION_JSON_VALUE)).andExpect(status()
                .isOk()).andReturn();

        String resultContent = result.getResponse().getContentAsString();
        Participants[] listOfParticipants = objectMapper.readValue(resultContent, Participants[].class);
        Assert.assertEquals(listOfParticipants.length, 2);
    }
}
